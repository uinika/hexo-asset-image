# hexo-asset-image-for-hexo5

Replace asset image to absolute path in Hexo. **Works fine with hexo 5.3.0, please feel free to use.**

> **Tips**: Reference & fixed [hexo-asset-image](https://github.com/xcodebuild/hexo-asset-image) compatibility issues with hexo 5.

## Usege

```shell
npm install hexo-asset-image-for-hexo5 --save
```

## Example

```shell
├─Data-Structure
├────diagram.png
└─Data-Structure.md
```

> **Notice**: You must switch the `post_asset_folder:true` in `_config.yml`, then use `![infomation](./Data-Structure/diagram.png)` to reference `diagram.png`.
