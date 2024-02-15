import prisma from "./lib/prisma";

export const getServerSideProps = async () => {
  const users = await prisma.user.findMany();
  console.log(users);

  return { props: { users } };
};
