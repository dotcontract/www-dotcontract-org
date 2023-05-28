import mermaid from "mermaid";

const mermaidTheme = {
  theme: "base",
  themeVariables: {
    background: "#fff",
    fontFamily: "Open Sans, Arial, Verdana",
    fontSize: "10px",
    primaryColor: "#fff",
    primaryBorderColor: "#000",
  },
};

mermaid.initialize({
  securityLevel: "loose",
  theme: mermaidTheme,
});

const mermaidChart = (code) => {
  return `<div class="mermaid">${code}</div>`;
};

const MermaidPlugin = async (md) => {
  md.mermaid = mermaid;
  const temp = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx];
    const code = token.content.trim();
    if (token.info === "mermaid") {
      const r = mermaidChart(code);
      return r;
    }
    const firstLine = code.split(/\n/)[0].trim();
    if (
      firstLine === "gantt" ||
      firstLine === "sequenceDiagram" ||
      firstLine.match(/^graph (?:TB|BT|RL|LR|TD);?$/)
    ) {
      return mermaidChart(code);
    }
    return temp(tokens, idx, options, env, slf);
  };
};

export default MermaidPlugin;
