"use server";

export type State = {
  status: "success" | "error";
  message: string;
} | null;

async function getUser(
  prevState: State | null,
  data: FormData
): Promise<State> {
  // we're gonna put a delay in here to simulate some kind of data processing like persisting data
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  console.log("server action", data);

  return {
    status: "success",
    message: `Welcome, ${data.get("name")} ${data.get("password")}!`,
  };
}

export default getUser;
