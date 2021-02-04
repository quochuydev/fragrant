import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button, message, Avatar } from "antd";

import { Layout } from "../../components";
import { BlogService } from "../../services";

import "antd/dist/antd.css";

export default function Blogs({ initBlogs, ...props }) {
  const initQuery = { page: 1, limit: 20 };
  const [query, setQuery] = useState(initQuery);
  const [blogs, setBlogs] = useState([]);

  function useDidUpdateEffect(fn, inputs) {
    const didMountRef = useRef(false);
    useEffect(() => {
      if (didMountRef.current) fn();
      else didMountRef.current = true;
    }, inputs);
  }

  useEffect(() => {
    setBlogs(initBlogs);
  }, []);

  useDidUpdateEffect(() => {
    fetchBlogs();
  }, [query]);

  async function fetchBlogs() {
    const result = await BlogService.publish.list(query);
    setBlogs(result.items);
  }

  return (
    <Layout>
      <Advanced />ư
      <ul className="p-none">
        {blogs.map((e, i) => (
          <li key={e._id}>
            <span>{i + 1}. </span>
            <a>{e._id}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}