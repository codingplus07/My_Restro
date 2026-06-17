import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Layout>
        <Box sx={{my:15,
          textAlign:"center",
          p:2,
        
          "& h4":{
            fontWeight:"bold",
            my:2,
            fontSize:"2rem"
          },
          "& p":{
            textAlign:"justify"

          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:"1.5rems"
            }
          }
        }}>
          <Typography variant="h4">Welcome to My Resturant</Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui
            culpa sit dolore cumque aliquid ipsa quos recusandae libero quia
            laboriosam autem quibusdam at dolorum, commodi asperiores iure.
            Laboriosam tempora officiis harum, tempore quisquam architecto sed
            praesentium vitae, veritatis natus, eaque perspiciatis pariatur
            voluptatibus dolorum magni iste. Debitis, eum, nostrum nulla
            eligendi odio corrupti error alias optio perferendis deleniti
            laboriosam omnis aliquam officia excepturi vitae inventore ipsa
            autem, sed beatae illo magnam deserunt reprehenderit eius! Voluptas
            dolor ut est at, expedita exercitationem beatae quam reprehenderit
            commodi quisquam repellendus mollitia accusantium? Placeat dolorum
            maxime debitis quasi quis et, repudiandae hic repellendus!
          </p>
          <br/>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque officia id, in soluta aut dicta dolor quaerat quod nemo, ad voluptatum repellat saepe itaque. Est, sit quis alias necessitatibus ipsa aperiam dolorum laudantium possimus vitae, at id recusandae ratione illo sunt repellendus vero obcaecati modi dignissimos? Inventore, quisquam facilis, tempora culpa architecto quasi ullam amet vel nostrum omnis illo odit deleniti error. Itaque, pariatur incidunt minima consequatur ex dicta similique inventore aspernatur eveniet facilis laudantium, illo, numquam dolore amet repellendus.
          </p>
        </Box>
      </Layout>
    </>
  );
};

export default About;
