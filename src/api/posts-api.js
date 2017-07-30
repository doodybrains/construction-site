import {createClient} from 'contentful';

const contentfulCreds = createClient({
  space: '',
  accessToken: ''
});

class PostsApi {
  static getPost(id, callback) {
    contentfulCreds.getEntry(id)
    .then(function (content) {
      var contentFields = {
        id: content.sys.id,
        title: content.fields.title,
        images: content.fields.image,
        category: content.fields.category
      };
      callback(contentFields);
    })
  }

  static getPosts(callback) {
    contentfulCreds.getEntries({'content_type': 'smallPost'})
    .then(function (entries) {
      let items = [];
      entries.items.map((content) => {
        var contentFields = {
          id: content.sys.id,
          title: content.fields.title,
          images: content.fields.image,
          category: content.fields.category
        };
        return items.push(contentFields);
      });
      callback(items);
    })
  }

  static getCats(callback) {
    contentfulCreds.getEntries({'content_type': 'homeCategory'})
    .then(function (entries) {
      let items = [];
      entries.items.map((content) => {
        var contentFields = {
          title: content.fields.title,
          image:  `http:${content.fields.mainImage.fields.file.url}`
        };
        return items.push(contentFields);
      });
      callback(items);
    })
  }
}

export default PostsApi;
