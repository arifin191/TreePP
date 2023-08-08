import Head from "next/head";

import GetInvolved from "@/components/GetInvolved";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import HowItWorks from "../components/HowItWorks";
import styles from "../styles/Home.module.css";

// const theme = createTheme();
// const sections = [
//   { title: "What is Tree++", url: "#" },
//   { title: "How it Works", url: "#" },
//   { title: "Recent Activities", url: "#" },
//   { title: "Contribute", url: "#" },
//   { title: "Team", url: "#" },
//   { title: "Donors", url: "#" },
//   { title: "Partners", url: "#" },
// ];

export default function Home() {
  return (
    <div className={styles.bgimg} style={{ backgroundColor: "#f8f1e6" }}>
      <Head>
        <title>
          Tree++ | Digital Carbon Offsetting through Tree Plantation
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <ThemeProvider theme={theme}> */}

      {/* <Header title="Tree++" pages={sections} /> */}
      <div>
        <main>
          {/* <TopFeaturedSection /> */}
          {/* <WhatIsTreePP /> */}
          <WhoWeAre />
          <WhatWeDo />
          <HowItWorks />
          <GetInvolved />
        </main>
      </div>

      {/* </ThemeProvider> */}
    </div>
  );
}
