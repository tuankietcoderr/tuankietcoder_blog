import Head from "next/head";

const Loading = () => {
  return (
    <>
      <Head>
        <title>Loading...</title>
      </Head>
      <div
        className="center"
        style={{
          minHeight: "100vh",
          alignContent: "center",
          display: "grid",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          backgroundColor: "rgba(0,0,0,0.5)",
          textAlign: "center",
          color: "white",
        }}
      >
        <div>
          <div className="brand">
            <a>
              &lt;tk <span className="coder">coder</span> /&gt;
            </a>
          </div>
          <h3>Loading...</h3>
        </div>
      </div>
    </>
  );
};

export default Loading;
