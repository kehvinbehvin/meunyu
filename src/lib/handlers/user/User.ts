/* eslint-disable */
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

const registerUserRoutes = (router: any) => {
    getUser(router)
}

const getUser = (router: any) => {
    router.get(async (req: NextApiRequest, res: NextApiResponse) => {
        const token = await getToken({req});
        console.log(token)
        if (token) {
            console.log("JSON Web Token", JSON.stringify(token, null, 2))

            res.status(200).json({
                 name: "John Doe",
            message: "Welcome authenticated user",
            });
          } else {
            res.status(403).json({
              error: "You must sign-in to view the content on this page.",
            });
          }
    })
}

export default registerUserRoutes