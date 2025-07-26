import tw from "tailwind-styled-components";

export const Container = tw.div`
w-full
h-full
flex
flex-col
gap-10
items-center
justify-center
relative
`;

export const Bg = tw.div`
flex-1
w-full
h-full
absolute
top-0
left-0
z-0
bg-center
bg-cover
opacity-40
`;

export const TextFooter = tw.p`
text-lg
text-black
opacity-100
z-10
`;