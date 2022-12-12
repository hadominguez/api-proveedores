--
-- PostgreSQL database dump
--

-- Dumped from database version 13.8 (Debian 13.8-0+deb11u1)
-- Dumped by pg_dump version 13.8 (Debian 13.8-0+deb11u1)

DROP DATABASE IF EXISTS proveedor;
CREATE DATABASE proveedor;
\c proveedor;


SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: proveedores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proveedores (
    proveedor_id integer DEFAULT nextval(('proveedores_seq'::text)::regclass) NOT NULL,
    nombre character varying(50),
    imagen character varying(250)
);


ALTER TABLE public.proveedores OWNER TO postgres;

--
-- Name: proveedores_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.proveedores_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public.proveedores_seq OWNER TO postgres;

--
-- Data for Name: proveedores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proveedores (proveedor_id, nombre, imagen) FROM stdin;
6	Proveedor S.A.	aaaaaaaaaa
7	Proveedor S.A.	aaaaaaaaaa
\.


--
-- Name: proveedores_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proveedores_seq', 9, true);


--
-- Name: proveedores proveedores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proveedores
    ADD CONSTRAINT proveedores_pkey PRIMARY KEY (proveedor_id);


--
-- PostgreSQL database dump complete
--

