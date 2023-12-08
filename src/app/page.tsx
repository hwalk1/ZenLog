export default function Page() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <h1>Hello, Zenlog</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <button style={{ marginRight: "50px" }}>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
}
