import tw from "tailwind-styled-components";

export const Container = tw.main`
w-[450px]
flex
flex-col
items-center
justify-between
rounded-lg
shadow-2xl
z-10
bg-white
`;

export const Header = tw.header`
flex
flex-col
items-center
justify-center
p-8

[&>h1]:text-2xl
[&>h1]:font-bold
`;

export const Logo = tw.div`
w-[64px]
h-[64px]
flex
items-center
justify-center
rounded-xl
mb-4
bg-blue-500

[&>svg]:text-4xl
[&>svg]:text-white
`;

export const Main = tw.section`
flex-1
w-full
flex
flex-col
items-center
justify-center
gap-4
px-8

[&>span]:self-end
[&>span]:text-blue-700
[&>span]:cursor-pointer
`;

export const Label = tw.label`
w-full

[&>p]:text-base
[&>p]:font-medium
`;

export const Footer = tw.footer`
w-full
flex
items-center
justify-center
gap-1
p-8
text-base
text-zinc-700
`;

export const Link = tw.a`
text-base
cursor-pointer
text-blue-500
`;