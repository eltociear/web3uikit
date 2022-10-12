"use strict";(self.webpackChunkweb3uikit_monorepo=self.webpackChunkweb3uikit_monorepo||[]).push([[426],{"./packages/core/src/lib/Button/ButtonColored/ButtonColored.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>ButtonColored_ButtonColored});__webpack_require__("./node_modules/.pnpm/core-js@3.23.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.23.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.23.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.23.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.23.2/node_modules/core-js/modules/es.array.slice.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.5_7i5myeigehqah43i5u7wbekgba/node_modules/styled-components/dist/styled-components.browser.esm.js"),index_es=__webpack_require__("./packages/styles/dist/index.es.js"),ButtonBase=__webpack_require__("./packages/core/src/lib/Button/ButtonBase/ButtonBase.tsx");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var coloredShades=(0,styled_components_browser_esm.iv)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n    :after {\n        background-color: ",";\n    }\n\n    :hover {\n        :after {\n            background-color: ",";\n        }\n    }\n\n    :active {\n        :after {\n            background-color: ",";\n        }\n    }\n"])),(0,index_es.sP)("light",90),(0,index_es.sP)("light",70),(0,index_es.sP)("light",50)),coloredRed=(0,styled_components_browser_esm.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n\n    :focus {\n        box-shadow: 0px 0px 0px 2px ",";\n    }\n\n    svg {\n        fill: ",";\n    }\n\n    ","\n"])),index_es.$_.red40,index_es.$_.red40,index_es.$_.red40,index_es.$_.navy30,index_es.$_.red40,coloredShades),coloredGreen=(0,styled_components_browser_esm.iv)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n\n    :focus {\n        box-shadow: 0px 0px 0px 2px ",";\n    }\n\n    svg {\n        fill: ",";\n    }\n\n    ","\n"])),index_es.$_.mint40,index_es.$_.mint40,index_es.$_.mint40,index_es.$_.navy30,index_es.$_.mint40,coloredShades),coloredBlue=(0,styled_components_browser_esm.iv)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n\n    :focus {\n        box-shadow: 0px 0px 0px 2px ",";\n    }\n\n    svg {\n        fill: ",";\n    }\n\n    ","\n"])),index_es.$_.navy40,index_es.$_.navy40,index_es.$_.navy40,index_es.$_.navy30,index_es.$_.navy40,coloredShades),coloredYellow=(0,styled_components_browser_esm.iv)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n\n    :focus {\n        box-shadow: 0px 0px 0px 2px ",";\n    }\n\n    svg {\n        fill: ",";\n    }\n\n    ","\n"])),index_es.$_.yellow50,index_es.$_.yellow50,index_es.$_.yellow50,index_es.$_.navy30,index_es.$_.yellow50,coloredShades);const ButtonColored_styles={ButtonColoredStyled:(0,styled_components_browser_esm.ZP)(ButtonBase.Z)(_templateObject6||(_templateObject6=_taggedTemplateLiteralLoose(["\n    :after {\n        background-color: ",";\n        content: '';\n        display: block;\n        height: 100%;\n        left: 0;\n        pointer-events: none;\n        position: absolute;\n        top: 0;\n        transition: all 0.3s ease;\n        width: 100%;\n        z-index: 0;\n    }\n\n    ","\n"])),(0,index_es.sP)("dark",0),(function(_ref){var color=_ref.color;return color&&function getColored(color){switch(color){case"red":return coloredRed;case"green":return coloredGreen;case"blue":return coloredBlue;case"yellow":return coloredYellow;default:return}}(color)}))};var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_excluded=["color"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ButtonColored_ButtonColoredStyled=ButtonColored_styles.ButtonColoredStyled,ButtonColored=function ButtonColored(_ref){var color=_ref.color,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)(ButtonColored_ButtonColoredStyled,Object.assign({color},props))};ButtonColored.displayName="ButtonColored";const ButtonColored_ButtonColored=ButtonColored;try{ButtonColored.displayName="ButtonColored",ButtonColored.__docgenInfo={description:"",displayName:"ButtonColored",props:{id:{defaultValue:null,description:"The button ID will generated if not assigned",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"the function to be called on click",name:"onClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void"}},disabled:{defaultValue:null,description:"set the button to be interactive, or not",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"What size should the button be",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"regular"'},{value:'"large"'},{value:'"xl"'}]}},text:{defaultValue:null,description:"The text to display in the button",name:"text",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"Set the color to show its importance to the user",name:"theme",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"link"'},{value:'"colored"'},{value:'"custom"'},{value:'"outline"'},{value:'"primary"'},{value:'"secondary"'},{value:'"translucent"'}]}},color:{defaultValue:null,description:"If 'theme' is set to 'colored', you can choose the color from these options",name:"color",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"green"'},{value:'"red"'},{value:'"yellow"'}]}},type:{defaultValue:null,description:"Set the HTML button type for form interaction",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},icon:{defaultValue:null,description:"set an icon to show inside the button",name:"icon",required:!1,type:{name:"Element"}},iconLayout:{defaultValue:null,description:"set an icon position, or maybe show only the icon",name:"iconLayout",required:!1,type:{name:"enum",value:[{value:'"leading"'},{value:'"trailing"'},{value:'"icon-only"'}]}},iconColor:{defaultValue:null,description:"set the icon color",name:"iconColor",required:!1,type:{name:"string"}},isFullWidth:{defaultValue:null,description:"set the button to be 100% width",name:"isFullWidth",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"this is mostly like disabled mode except it gives the user a good visual indicator that something is loading",name:"isLoading",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:null,description:"Text to display when button is in loading state",name:"loadingText",required:!1,type:{name:"string"}},loadingProps:{defaultValue:null,description:"Loading Props, the props to send to the loading component",name:"loadingProps",required:!1,type:{name:"ILoadingProps"}},radius:{defaultValue:null,description:"Border radius prop, allows a button to have a custom border radius",name:"radius",required:!1,type:{name:"number"}},isTransparent:{defaultValue:null,description:"The background color is set to `transparent` and the hover effect is disabled",name:"isTransparent",required:!1,type:{name:"boolean"}},customize:{defaultValue:null,description:"Customize the button",name:"customize",required:!1,type:{name:"TButtonCustomConfig"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/lib/Button/ButtonColored/ButtonColored.tsx#ButtonColored"]={docgenInfo:ButtonColored.__docgenInfo,name:"ButtonColored",path:"packages/core/src/lib/Button/ButtonColored/ButtonColored.tsx#ButtonColored"})}catch(__react_docgen_typescript_loader_error){}}}]);