import StyledComponentsRegistry from "../../lib/AntdRegistry";

import "../../styles/index.scss"
export default function RootLayout({
    children,
}: any) {

    return (
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
    );
}
