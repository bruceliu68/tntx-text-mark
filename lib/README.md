### @tntx/text-mark 文本高亮组件

#### 安装
```bash
npm i @tntx/text-mark
```

#### 如何使用
```jsx
import React, { useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import TextMark from "@tntx/text-mark";

const Demo = props => {

    return (
        <>
            <TextMark
				style={{ lineHeight: "28px" }}
				activeIndex={1}
				activeStyle={{ backgroundColor: "#f48f42" }}
				highlightStyle={{ backgroundColor: "#ffd54f" }}
				searchWords={["智能"]}
				textToHighlight="同盾科技是中国智能分析和决策领域领军企业，以人工智能、云计算、大数据三大核心技术体系为基础，基于对数据的探索洞察和深刻理解，将深度学习、联邦学习等领先技术与业务场景深度融合，为金融、保险、互联网、政务、零售、物流等行业提供智能分析与决策服务，赋能并激发客户，帮助客户做出更佳决策。截至目前，累计已有超过一万家客户选择了同盾的产品及服务。"
			/>
			<br />
			<br />
			<TextMark
				style={{ lineHeight: "28px" }}
				activeIndex={1}
				activeClassName="demo-text-mark-active"
				highlightClassName="demo-text-mark-highlight"
				searchWords={["智能"]}
				textToHighlight="同盾科技是中国智能分析和决策领域领军企业，以人工智能、云计算、大数据三大核心技术体系为基础，基于对数据的探索洞察和深刻理解，将深度学习、联邦学习等领先技术与业务场景深度融合，为金融、保险、互联网、政务、零售、物流等行业提供智能分析与决策服务，赋能并激发客户，帮助客户做出更佳决策。截至目前，累计已有超过一万家客户选择了同盾的产品及服务。"
			/>
			<br />
			<TextMark
				style={{ lineHeight: "28px" }}
				activeIndex={1}
				activeClassName="demo-text-mark-active"
				highlightClassName={{
					"智能": "demo-text-mark-highlight",
					"同盾": "demo-text-mark-highlight2"
				}}
				searchWords={["先生", "聪明人"]}
				textToHighlight="同盾科技是中国智能分析和决策领域领军企业，以人工智能、云计算、大数据三大核心技术体系为基础，基于对数据的探索洞察和深刻理解，将深度学习、联邦学习等领先技术与业务场景深度融合，为金融、保险、互联网、政务、零售、物流等行业提供智能分析与决策服务，赋能并激发客户，帮助客户做出更佳决策。截至目前，累计已有超过一万家客户选择了同盾的产品及服务。"
			/>
        </>
    )
};

ReactDOM.render(
    <Demo />,
    document.getElementById('root')
);
```

### API

| 参数            | 说明            | 类型   | 是否必须 | 默认值 |
| --------------- | --------------- | ------ | -------- | ------ |
| textToHighlight | 需要做关键字高亮的文本 | string | 是 | | |
| searchWords | 搜索的关键字，搜索前会转换成正则表达式 | Array<string \| RegExp> | 是 | |
| highlightClassName | 高亮状态的 CSS 类名，可以为不同关键字设置不同的类名 | string \| object | 否 | |
| highlightStyle | 高亮状态的内联样式 | object | 否 | |
| activeClassName | 选中状态的 CSS 类名 | string | 否       |        | 
| activeStyle | 选中状态的内联样式 | object | 否 |  |
| activeIndex | 选中状态的下标 | number | 否 | |
| unhighlightClassName | 未高亮状态的 CSS 类名 | string | 否 | |
| unhighlightStyle | 未高亮状态的内联样式 | object | 否 | |
| highlightTag | 高亮部分用来渲染的组件 | React.ElementType | 否 | `'mark'` |
| sanitize | 关键字和待处理文本预处理函数 | (str: string) => string | 否 | identity |
| autoEscape | 自动转译关键字里的正则特殊字符 | boolean | 否 | `false` |
| caseSensitive | 关键字匹配时是否区分大小写 | boolean | 否 | `false` | 
| findChunks | 自定义关键字匹配过程 | (options) => Array<{start: number; end: number; highlight: boolean;}> | 否 | | 
| className | 自定义组件最外层标签 CSS 类名 | string | 否 | |
| style | 自定义组件最外层内联样式 | object | 否 | |