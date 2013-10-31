// Load the application once the DOM is ready, using `jQuery.ready`:
(function() {

  var Tweet = Backbone.Model.extend({ urlRoot : '/tweets' });

  // Module Item View
  // --------------
  var TweetView = Backbone.View.extend({

    tagName:  "li",
    template: _.template('<%= text %>'),

    initialize: function() {
      console.log("Init Tweet View");
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

  });

  var Tweets = Backbone.Collection.extend({
    model : Tweet,
    url : '/tweets'
  });

  var TweetsView = Backbone.View.extend({
    el: "#tweets",

    initialize: function() {
      console.log("Init Tweets View");
      console.log(this.collection.models);
      this.render();
    },

    render: function() {
      var that = this;

      this.$el.html("");
      this.collection.each(function(model) {
        that.renderItem(model);
      }, this);

      return this;
    },

    renderItem: function(tweet) {
      var tweetView = new TweetView({ model: tweet });
      this.$el.append(tweetView.render().el);
    }
  });

  var appView = new TweetsView({ collection: new Tweets(tweets) }); // pulls from bootstrapped window variable tweets

})();