import FacebookHelper from '../../../src/facebook/helper.js'

describe('facebook-helper', () => {
  let facebookHelper = null;

  before((done) => {
    let userId = "963670646985769";
    let token = "EAACEdEose0cBAGrkBfQR9IXNsO2qQMWLKZAJQXNU854sFoxBpugxbMdbkyl2COAM4BJGUb51o0b5obOpxY7mmIwk2WXK4ZAZBERMcRBu7hNhhG12cGfn0WjRI48qR0PUxmLszmNCn0mkyLh13LrcQh5xWjeXuc1U5yVHvygYgRPBTooTYC9Sz4E5ZC5Ec6dwCdKZCeyzHRQZDZD";
    facebookHelper = new FacebookHelper({userId, token});
    done();
  });

  it("get friends list", async (done) => {
    try {
      let friends = await facebookHelper.getFriends();
      console.log("friends", friends);
      (friends != null).should.be.true;
      friends.should.be.Array;
      friends[0].should.have.keys("name", "id");
      done();
    } catch (e) {
      done(e);
    }
  });

  it("publish post", async (done) => {
    try {
      let post = {
        message: 'test facebook post api'
      }
      let result = await facebookHelper.publishPost(post);
      console.log("result", result);
      done();
    } catch (e) {
      done(e);
    }
  });
});
