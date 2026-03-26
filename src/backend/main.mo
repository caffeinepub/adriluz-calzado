import Text "mo:core/Text";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";

actor {
  type Category = {
    #damas;
    #caballeros;
    #ninos;
  };

  module Category {
    public func toText(category : Category) : Text {
      switch (category) {
        case (#damas) { "Damas" };
        case (#caballeros) { "Caballeros" };
        case (#ninos) { "Niños" };
      };
    };
  };

  type Product = {
    name : Text;
    category : Category;
    referenceCode : Text;
    price : Text;
    imagePath : Text;
  };

  module Product {
    public func compare(product1 : Product, product2 : Product) : Order.Order {
      switch (Text.compare(product1.name, product2.name)) {
        case (#equal) { Text.compare(product1.referenceCode, product2.referenceCode) };
        case (order) { order };
      };
    };
  };

  type BlogPost = {
    title : Text;
    content : Text;
    date : Time.Time;
    author : Text;
  };

  module BlogPost {
    public func compare(blogPost1 : BlogPost, blogPost2 : BlogPost) : Order.Order {
      Text.compare(blogPost1.title, blogPost2.title);
    };
  };

  type ProductId = Nat;
  type BlogPostId = Nat;

  let products = Map.empty<ProductId, Product>();
  let blogPosts = Map.empty<BlogPostId, BlogPost>();

  var nextProductId : ProductId = 0;
  var nextBlogPostId : BlogPostId = 0;

  func getProductInternal(id : ProductId) : Product {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product does not exist") };
      case (?product) { product };
    };
  };

  func getBlogPostInternal(id : BlogPostId) : BlogPost {
    switch (blogPosts.get(id)) {
      case (null) { Runtime.trap("BlogPost does not exist") };
      case (?blogPost) { blogPost };
    };
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray().sort();
  };

  public query ({ caller }) func getProductsByCategory(category : Category) : async [Product] {
    products.values().toArray().filter(func(p) { p.category == category }).sort();
  };

  public query ({ caller }) func getProduct(id : ProductId) : async Product {
    getProductInternal(id);
  };

  public query ({ caller }) func getAllBlogPosts() : async [BlogPost] {
    blogPosts.values().toArray().sort();
  };

  public query ({ caller }) func getBlogPost(id : BlogPostId) : async BlogPost {
    getBlogPostInternal(id);
  };

  public shared ({ caller }) func addProduct(product : Product) : async ProductId {
    let productId = nextProductId;
    products.add(productId, product);
    nextProductId += 1;
    productId;
  };

  public shared ({ caller }) func updateProduct(id : ProductId, product : Product) : async () {
    ignore getProductInternal(id);
    products.add(id, product);
  };

  public shared ({ caller }) func addBlogPost(title : Text, content : Text, author : Text) : async BlogPostId {
    let blogPostId = nextBlogPostId;
    let blogPost : BlogPost = {
      title;
      content;
      author;
      date = Time.now();
    };
    blogPosts.add(blogPostId, blogPost);
    nextBlogPostId += 1;
    blogPostId;
  };

  public shared ({ caller }) func updateBlogPost(id : BlogPostId, blogPost : BlogPost) : async () {
    ignore getBlogPostInternal(id);
    blogPosts.add(id, blogPost);
  };
};
