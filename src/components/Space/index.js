import React from "react";

import NavbarItem from "./NavbarItem";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Space() {
  return <NavbarItem path="/space" linkText="Space" />;
}
