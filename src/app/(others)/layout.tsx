// import StyledComponentsRegistry from "../../lib/AntdRegistry";

// import "../../styles/index.scss"
// export default function RootLayout({
//     children,
// }: any) {

//     return (
//         <StyledComponentsRegistry>
//             {children}
//         </StyledComponentsRegistry>
//     );
// }

//New code 

import { ReactNode } from "react";
import StyledComponentsRegistry from "../../lib/AntdRegistry";
import "../../styles/index.scss";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}