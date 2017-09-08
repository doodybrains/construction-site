import {createClient} from 'contentful';

const contentfulCreds = createClient({
  space: 'an24xfim89fc',
  accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY
});

class PostsApi {
  static getPosts(callback) {
    contentfulCreds.getEntries({'content_type': 'post'})
    .then(function (entries) {
      let items = [];
      entries.items.map((content) => {
        var contentFields = {
          id: content.sys.id,
          name: content.fields.name,
          videoUrl: content.fields.videoUrl,
          quote: content.fields.quote,
          quoteUrl: content.fields.quoteUrl
        };
        return items.push(contentFields);
      });
      callback(items);
    })
  }
}

export default PostsApi;
