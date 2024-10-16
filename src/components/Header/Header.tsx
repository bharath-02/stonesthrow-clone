import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EmailIcon from "@mui/icons-material/Email";

import logo from "@/assets/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          {isMobile && (
            <IconButton onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems={{ xs: "flex-start", md: "center" }}
            className={[styles.navlinks, menuOpen && styles.active].filter(Boolean).join(" ")}
            pt={{ xs: 12, md: 1 }}
            pb={{ xs: 4, md: 1 }}
            px={{ xs: 4, md: 0 }}
          >
            <Link href="/"><Typography variant="h6">Store</Typography></Link>
            <Link href="/"><Typography variant="h6">Artists</Typography></Link>
            <Link href="/"><Typography variant="h6">News</Typography></Link>
            <Link href="/"><Typography variant="h6">Tours</Typography></Link>

            {isMobile && (
              <IconButton
                onClick={() => setMenuOpen(false)}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 32,
                  color: "#fff",
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Stack>

          <Link href="/">
            <Image src={logo} alt="Stonesthrow Logo" width={80} height={80} />
          </Link>

          <Stack direction="row" spacing={4}>
            <div className={styles.searchBar}>
              <input type="text" placeholder="Search" aria-label="Search" />
              <button type="submit">
                <SearchIcon />
              </button>
            </div>
            <Link href="#">
              <PersonIcon fontSize="large" color="primary" />
            </Link>
            <Link href="#">
              <ShoppingCartIcon fontSize="large" color="primary" />
            </Link>
            <Link href="#">
              <EmailIcon fontSize="large" color="primary" />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </header>
  );
};

export default Header;
