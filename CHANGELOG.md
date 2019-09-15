# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0](https://github.com/Jay0328/react-hooks/compare/v1.0.0...v2.0.0) (2019-09-15)


### ⚠ BREAKING CHANGES

* **useElement:** findDOMNode for parameter is deprecated
* **useSetState:** removed
* **useWindowSize:** use name export
* **useMediaQuery:** removed
* entry file removed, import  hook file needed instead

### Bug Fixes

* **useDidUpdate:** avoid from triggered on did mount phase ([4ddfb6a](https://github.com/Jay0328/react-hooks/commit/4ddfb6a))


### Features

* **useForceUpdate:** initial ([00c7ecc](https://github.com/Jay0328/react-hooks/commit/00c7ecc))
* **useIsMounted:** initial ([3dff68a](https://github.com/Jay0328/react-hooks/commit/3dff68a))
* **useIsomorphicLayoutEffect:** initial ([d3fcdcf](https://github.com/Jay0328/react-hooks/commit/d3fcdcf))
* **useLatest:** initial ([4f81dd6](https://github.com/Jay0328/react-hooks/commit/4f81dd6))
* **useLatestCallback:** initial ([971202d](https://github.com/Jay0328/react-hooks/commit/971202d))
* **useSetState:** initial ([f6d29b0](https://github.com/Jay0328/react-hooks/commit/f6d29b0))


* remove entry file ([d5463ff](https://github.com/Jay0328/react-hooks/commit/d5463ff))
* **useElement:** add RefObject ([0f2ba84](https://github.com/Jay0328/react-hooks/commit/0f2ba84))
* **useMediaQuery:** removed ([e05ea27](https://github.com/Jay0328/react-hooks/commit/e05ea27))
* **useSetState:** removed ([612486b](https://github.com/Jay0328/react-hooks/commit/612486b))
* **useWindowSize:** use name export ([5923f60](https://github.com/Jay0328/react-hooks/commit/5923f60))

# [1.0.0](https://github.com/Jay0328/react-hooks/compare/v0.2.0...v1.0.0) (2019-03-30)


### chore

* upgrade ([3a9eaf5](https://github.com/Jay0328/react-hooks/commit/3a9eaf5))


### BREAKING CHANGES

* use es instead of commonjs



# [0.2.0](https://gitlab.jay0328.me/root/UJ/compare/v0.1.2...v0.2.0) (2019-03-12)


### Bug Fixes

* **useDidUpdate:** won't be called if unmounted ([ce94516](https://gitlab.jay0328.me/root/UJ/commit/ce94516))


### Features

* useMediaQuery ([14ff157](https://gitlab.jay0328.me/root/UJ/commit/14ff157))
* useWindowSize ([725796d](https://gitlab.jay0328.me/root/UJ/commit/725796d))



## [0.1.2](https://gitlab.jay0328.me/root/UJ/compare/v0.1.1...v0.1.2) (2019-03-11)



## [0.1.1](https://gitlab.jay0328.me/root/UJ/compare/v0.1.0...v0.1.1) (2019-03-10)



# [0.1.0](https://gitlab.jay0328.me/root/UJ/compare/v0.0.2...v0.1.0) (2019-03-10)


### Build System

* **bundle:** separate commonjs and es ([2d3a5cd](https://gitlab.jay0328.me/root/UJ/commit/2d3a5cd))


### Code Refactoring

* **lifecycle:** separate didMount and unmount ([be2eaad](https://gitlab.jay0328.me/root/UJ/commit/be2eaad))
* **useElement:** rename useContainer to useElement ([f817b24](https://gitlab.jay0328.me/root/UJ/commit/f817b24))
* **useStateCb:** rename useStateWithCallback to useStateCb ([28c8222](https://gitlab.jay0328.me/root/UJ/commit/28c8222))


### Features

* **useUpdate:** initial ([7e5db24](https://gitlab.jay0328.me/root/UJ/commit/7e5db24))


### BREAKING CHANGES

* **lifecycle:** useLifeCycles is removed, use useDidMount and useUnmount instead
* **useStateCb:** useStateWithCallback is removed, use useStateCb instead.
* **useElement:** useContainer removed, use useElement instead.
* **bundle:** Just import root path



## [0.0.2](https://gitlab.jay0328.me/root/UJ/compare/v0.0.1...v0.0.2) (2019-03-01)



## 0.0.1 (2019-03-01)
