// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
      Images: [
        "/male-banner.jpg",
        "/male-banner2.jpg",
        "/male-banner.jpg"
      ],
    });
}
