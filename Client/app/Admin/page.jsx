"use client";
import React, { useEffect, useState } from "react";

const AdminPage = () => {
  useEffect(() => {
    window.location.href = "/Admin/AllProducts";
  }, []);
  return <div>Page</div>;
};

export default AdminPage;
