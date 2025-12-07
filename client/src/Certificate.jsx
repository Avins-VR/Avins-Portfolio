import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "./3D card.jsx";


import PythonCert from "./assets/Datasciencenptl.jpg";
import LinguaskillCert from "./assets/Linguaskill.jpg";
import DBMS from "./assets/DBMS.png";
import sqlCert from "./assets/sql and rdbm.png";
import MongodbCert from "./assets/Mongodb basic.png";
import MachineLearningCert from "./assets/ML Certificate.png";
import OCIAIFoundation from "./assets/OCI AI Foundation.png";

function Certificate() {
  const [certificates] = useState([
    {
      title: "OCI AI Foundations",
      issuer: "Oracle University",
      image: OCIAIFoundation,
    },
    {
      title: "Python For Data Science",
      issuer: "NPTEL",
      image: PythonCert,
    },
    {
      title: "Data Base Management System",
      issuer: "NPTEL",
      image: DBMS,
    },
    {
      title: "Linguaskill",
      issuer: "Cambridge University",
      image: LinguaskillCert,
    },
    {
      title: "SQL and Relational Database",
      issuer: "IBM",
      image: sqlCert,
    },
    {
      title: "Machine Learning (297 hrs)",
      issuer: "Infosys Springboard",
      image: MachineLearningCert,
    },
    {
      title: "MongoDB Basic fo Students",
      issuer: "MongoDB",
      image: MongodbCert,
    }
  ]);

  return (
    <section className="certificate-section" id="certificates">
      {/* Heading */}
      <motion.h2
        className="certificate-heading"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Certificates
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="certificate-subtext"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        Each certificate reflects a step in my continuous learning journey —
        from mastering the basics to exploring new technologies.
      </motion.p>

      {/* Grid of certificates */}
      <motion.div
        className="certificate-grid"
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {certificates.map((certificate, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.9 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <CardContainer className="certificate-card">
              <CardBody className="certificate-card-body">
                <CardItem translateZ="50px">
                  <motion.img
                    src={certificate.image}
                    alt={certificate.title}
                    className="certificate-img"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                </CardItem>

                <CardItem translateZ="30px">
                  <motion.h4
                    whileHover={{ color: "#6c63ff", scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 250 }}
                  >
                    {certificate.title}
                  </motion.h4>
                </CardItem>

                <CardItem translateZ="20px">
                  <motion.p
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {certificate.issuer}
                  </motion.p>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Certificate;
