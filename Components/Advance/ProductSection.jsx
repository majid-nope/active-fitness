import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AccessAlarm, Shield, Speed } from "@mui/icons-material/";
import { Col, Container, Row } from "react-bootstrap";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductSection = () => {

  const router = useRouter()
  const [product, theme] = useSelector((state) => [
    state.product.products,
    state.profile.theme,
  ]);
  const productsCards = product.map?.((el, index) => (
    <Col key={index} className="g-4 " lg={3} md={4} sm={6} xs={12}>
      <Card
        onClick={() => {
          router.push({
            pathname: `/[product]`,
            query: {
              product:el.title,
              productID: el.id
            }
          });
        }}
        style={{
          maxHeight: "100%",
          minHeight: "100%",
          display: "flex",
          alignItems: "center",
          boxShadow: "0 5px 20px 3px rgb(0 0 0 / 5%)",
        }}
      >
        <CardActionArea>
          <CardMedia className="d-flex justify-content-center">
            <Image
              alt="product"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8Xg8AAhMBSIC+ZFkAAAAASUVORK5CYII="
              layout="fixed"
              style={{ padding: "100px" }}
              width={200}
              height={200}
              src={el.image}
            />
          </CardMedia>

          <CardContent
            className="bg-light"
            style={{
              minHeight: "20%",
              overflow: "hidden",
            }}
          >
            <Typography
              variant="body2"
              color="white"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {el.title}
            </Typography>
            <Typography variant="h6">{el.price} $</Typography>
            <Rating defaultValue={el.rating.rate} precision={0.5} readOnly />
          </CardContent>
        </CardActionArea>
      </Card>
    </Col>
  ));

  return (
    <Container>
      <div
        className={`mt-3 row gap-2 text-${theme === "dark" ? "light" : "dark"}`}
      >
        <div
          style={{
            height: "60px",
            boxShadow: "0 5px 20px 3px rgb(0 0 0 / 5%)",
          }}
          className={`col bg-${theme} d-flex justify-content-center align-items-center`}
        >
          <Speed className="mx-2" /> Fast delivery
        </div>
        <div
          style={{
            height: "60px",
            boxShadow: "0 5px 20px 3px rgb(0 0 0 / 5%)",
          }}
          className={`col bg-${theme} d-flex justify-content-center align-items-center`}
        >
          <AccessAlarm className="mx-2" /> 24/7 Support
        </div>
        <div
          style={{
            height: "60px",
            boxShadow: "0 5px 20px 3px rgb(0 0 0 / 5%)",
          }}
          className={`col bg-${theme} d-flex justify-content-center align-items-center`}
        >
          <Shield className="mx-2" /> Secure
        </div>
      </div>

      <section className="mt-3">
        <Row className="'gap-4">{productsCards}</Row>
      </section>
    </Container>
  );
};

export default ProductSection;
