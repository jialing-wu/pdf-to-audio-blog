export default function HomePage() {
  return (
    <div>
      <h2>🎧 Blog Episodes</h2>
      <p>这里将显示你生成的音频博客。</p>

      <div style={{ border: "1px solid #ccc", padding: 16 }}>
        <h3>示例：AI in Education Paper</h3>
        <audio controls src="">
          Your browser does not support audio.
        </audio>
        <p>Status: Processing / Ready</p>
      </div>
    </div>
  );
}
