export default function StudioPage() {
  return (
    <div>
      <h2>🛠 Studio</h2>
      <p>上传 PDF，生成中文笔记和音频。</p>

      <input type="file" accept=".pdf" />
      <br /><br />
      <button>Generate Notes & Audio</button>

      <hr />

      <h3>📄 Chinese Notes (Preview)</h3>
      <pre style={{ background: "#f5f5f5", padding: 16 }}>
这里将显示生成的结构化中文笔记。
      </pre>

      <h3>🔊 Audio</h3>
      <audio controls />
    </div>
  );
}
