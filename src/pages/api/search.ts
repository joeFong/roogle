// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import qs from "qs";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { q } = req.query

  const cx = '8346f68306dc840e8'
  const key = 'AIzaSyBoNDSafSXJFLqDtUfIVgwepFcxdOORg30'

  const payload = {
    cx, 
    q, 
    key
  }

  const params = qs.stringify(payload)
  const url = `https://customsearch.googleapis.com/customsearch/v1?${params}`
  const response = await fetch(url)
  const responseJson = await response.json()

  res.status(200).json(responseJson)
}
