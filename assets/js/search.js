(function () {
  function showResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) {
      var appendString = '';

      for (var i = 0; i < results.length; i++) {
        var item = store[results[i].ref];

        appendString +=
          '<article class="post"><a class="post__link" href="' +
          item.url +
          '">' +
          '<h2 class="post__heading">' +
          item.title +
          '</h2>';
        appendString += '<p class="post__date">' + item.date + '</p>';
        appendString +=
          '<p class="post__excerpt">' +
          item.content.substring(0, 200).trimRight() +
          '...</p></a></article>';
      }
      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<p>No results found.</p>';
    }
  }

  function getQuery(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQuery('query');
  if (searchTerm) {
    document.getElementById('search-box').setAttribute('value', searchTerm);

    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('date');
      this.field('content');

      for (var key in window.store) {
        this.add({
          id: key,
          title: window.store[key].title,
          author: window.store[key].author,
          date: window.store[key].date,
          content: window.store[key].content,
        });
      }
    });

    var results = idx.search(searchTerm);
    showResults(results, window.store);
  }
})();
