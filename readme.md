An example of using [Pretzel Test](https://github.com/twosmalltrees/pretzel-test), a test framework that was built in [this blog post](https://www.twosmalltrees.com/posts/building-a-javascript-test-framework).

To get this working you'll need to follow the following steps:

#### Step One - Clone Pretzel Test

```bash
git clone https://github.com/twosmalltrees/pretzel-test.git pretzel-test
```

#### Step Two - Link Pretzel Test

```bash
cd pretzel-test
npm link
```

#### Step Three - Clone this repo and link

```bash
git clone https://github.com/twosmalltrees/pretzel-test-example.git pretzel-test-example
cd pretzel-test-example
npm link pretzel-test
```

### Step Four - Test!

```bash
npm run test
```