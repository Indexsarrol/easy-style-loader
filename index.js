module.exports = function(source) {
    // 注意：这里的source为已经转成的css代码
    // 1.动态的生成style标签
    let styleNode = document.createElement('style');
    // 2.将css代码插入到style标签中
    styleNode.innerHTML = JSON.stringify(source);
    // 3.将style标签插入到head标签中
    document.head.appendChild(styleNode);
    // 4.这个时候我们就会有疑问了，每个loader都需要返回值（String | Buffer）,显然这里将代码变成String更为简单些：
    let style = `
		let style = document.createElement('style');
        style.innerHTML = ${JSON.stringify(source)};
        document.head.appendChild(style);
	`;
    return style;
}