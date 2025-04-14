import StyledComponentsRegistry from "../../lib/AntdRegistry";

export default function RootLayout({
    children,
}: any) {

    return (
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
    );
}
