"use client";

import { motion } from "motion/react";

export function Phrases() {
  return (
    <section className="bg-base grid items-center py-24">
      <div className="container max-w-4xl text-balance">
        <motion.div
          className="text-primary space-y-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          <motion.p
            className="md:heading-md heading-sm font-bold!"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            Instituições financeiras precisam evoluir sobre estruturas legadas, sistemas fragmentados e exigências regulatórias cada vez mais rígidas.
          </motion.p>

          <motion.p
            className="md:heading-md heading-sm font-bold!"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            Cada integração carrega impacto operacional.
          </motion.p>

          <motion.p
            className="md:heading-md heading-sm font-bold!"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            Cada falha pode comprometer continuidade, segurança e confiança.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
