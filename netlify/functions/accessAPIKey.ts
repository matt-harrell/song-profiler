import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    const response = await fetch(`${process.env.API_KEY}`);
    return{
        statusCode:200,
        body:JSON.stringify(response)
    }
  } catch (error) {
    return {
        statusCode: 404,
        body: error.toString(),
      };
  }
};

export { handler };
