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
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

import footerLogo from "@/assets/footerLogo.png";
import tikTokLogo from "@/assets/tiktok.png";
import spotifyLogo from "@/assets/spotify.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        className={styles.title}
      >
        <Typography variant="h3">
          Sign up for the Stones Throw newsletter
        </Typography>
        <Typography variant="h5">
          No Junk. <span>Just the Good stuff.</span>
        </Typography>
      </Stack>
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="flex-start"
          justifyContent="space-between"
          py={10}
        >
          <Stack direction="row" spacing={4}>
            <Link href="/">
              <Image
                src={footerLogo}
                alt="Stonesthrow Logo"
                width={80}
                height={80}
              />
            </Link>
            <Stack direction="column" spacing={2} className={styles.address}>
              <Typography variant="h4">Stones Throw Records</Typography>
              <p>2658 Griffith Park Blvd #504 </p>
              <p>Los Angeles CA 90039</p>

              <Stack direction="row" spacing={2}>
                <Link href="#">
                  <InstagramIcon
                    fontSize="small"
                    color="primary"
                    className={styles.icon}
                  />
                </Link>
                <Link href="#">
                  <TwitterIcon
                    fontSize="small"
                    color="primary"
                    className={styles.icon}
                  />
                </Link>
                <Link href="#">
                  <FacebookIcon
                    fontSize="small"
                    color="primary"
                    className={styles.icon}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={tikTokLogo}
                    alt="tikTok logo"
                    width={18}
                    height={18}
                  />
                </Link>
                <Link href="#">
                  <YouTubeIcon
                    fontSize="small"
                    color="primary"
                    className={styles.icon}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={spotifyLogo}
                    alt="spotify logo"
                    width={18}
                    height={18}
                  />
                </Link>
                <Link href="#">
                  <MusicNoteIcon
                    fontSize="small"
                    color="primary"
                    className={styles.icon}
                  />
                </Link>
              </Stack>

              <p>
                ©{" "}
                <Typography
                  className={styles.copyRight}
                >{`${new Date().getFullYear()} Stones Throw Records. All rights reserved.`}</Typography>
              </p>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={4} className={styles.footerLinks}>
            <Link href="/">
              <Typography variant="h6">Shop</Typography>
            </Link>
            <Link href="/">
              <Typography variant="h6">Artists</Typography>
            </Link>
            <Link href="/">
              <Typography variant="h6">Tours</Typography>
            </Link>
            <Link href="/">
              <Typography variant="h6">Stones Throw History</Typography>
            </Link>
            <Link href="/">
              <Typography variant="h6">Contact Us</Typography>
            </Link>
            <Link href="/">
              <Typography variant="h6">Privacy Policy</Typography>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
