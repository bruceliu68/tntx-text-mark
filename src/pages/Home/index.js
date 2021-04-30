/*
 * @CreatDate: 2021-04-29 14:27:48
 * @Describe: 首页
 */

import { useEffect, useState } from "react";
import TextMark from "../TextMark";

export default props => {

	return (
		<div>
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
			<br />
			<TextMark
				style={{ lineHeight: "28px" }}
				activeIndex={1}
				activeClassName="demo-text-mark-active"
				highlightClassName={{
					"智能": "demo-text-mark-highlight",
					"同盾": "demo-text-mark-highlight2"
				}}
				searchWords={["智能", "同盾"]}
				textToHighlight="同盾科技是中国智能分析和决策领域领军企业，以人工智能、云计算、大数据三大核心技术体系为基础，基于对数据的探索洞察和深刻理解，将深度学习、联邦学习等领先技术与业务场景深度融合，为金融、保险、互联网、政务、零售、物流等行业提供智能分析与决策服务，赋能并激发客户，帮助客户做出更佳决策。截至目前，累计已有超过一万家客户选择了同盾的产品及服务。"
			/>
		</div>
	);
};
