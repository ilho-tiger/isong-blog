# isong-blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/3a22b74b-a311-4f19-a18e-ddbbe0ba387c/deploy-status)](https://app.netlify.com/sites/hungry-easley-68d30a/deploys)

My personal/developer blog which will be hosted on https://blog.isong.dev (eventually. Currently it is just a git repo).

## Hugo commands

Create a new Site

```bash
hugo new site <site_name>
```

Add a Theme
```bash
# in <site_dir>/themes
git submodule add <theme_git_repo>
```

Add a content
```bash
hugo new posts/my-post.md
```

Hugo server with draft
```bash
hugo server -D
```

Hugo build
```bash
hugo -D
```

## License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a> 

The content of this project itself is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/), and the underlying source code used to format and display that content is licensed under the [MIT license](LICENSE.md).
