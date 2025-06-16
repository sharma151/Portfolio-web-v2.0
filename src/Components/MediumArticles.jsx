/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import axios from "axios";
import Spinner from "./Spinner";

const MediumArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Detect 20% visibility

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@connect2saurav"
        );
        setArticles(res.data.items.slice(0, 3)); // Show latest 3
      } catch (error) {
        console.error("Error fetching Medium articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section ref={ref} className="py-16 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
          📝 Latest Articles
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">
            <Spinner width={30} height={30} />
          </p>
        ) : articles.length === 0 ? (
          <p className="text-center text-gray-500">No articles found.</p>
        ) : (
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => {
              const thumbnail =
                article.thumbnail ||
                "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

              return (
                <motion.a
                  key={article.guid} // Add a key prop for list items
                  href={article.link}
                  target="_blank"
                  className="rounded-xl border border-gray-700 hover:shadow-lg hover:shadow-purple-500/40 transition duration-300 p-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <img
                    src={thumbnail}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-purple-400">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {article.description.replace(/<[^>]+>/g, "")}
                    </p>
                    <span className="block text-xs text-gray-400 mt-4">
                      {new Date(article.pubDate).toLocaleDateString()}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default MediumArticles;
