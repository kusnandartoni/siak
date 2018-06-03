-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 03, 2018 at 11:20 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `siak`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_artikel`
--

CREATE TABLE `tb_artikel` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `tanggal` date NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `isi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_artikel`
--

INSERT INTO `tb_artikel` (`id`, `judul`, `tanggal`, `gambar`, `isi`) VALUES
(4, 'asdd', '2018-05-31', 'asda', 'asdasd'),
(9, 'ini id nomor 9', '2018-05-31', '2323', '1231'),
(10, 'ARTIKEL kesekian', '2018-05-31', 'asd', 'asd');

-- --------------------------------------------------------

--
-- Table structure for table `tb_kelas`
--

CREATE TABLE `tb_kelas` (
  `kd_kelas` varchar(5) NOT NULL,
  `nama_kelas` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_kelas`
--

INSERT INTO `tb_kelas` (`kd_kelas`, `nama_kelas`) VALUES
('1a', 'I A'),
('1b', 'I B'),
('1c', 'I C'),
('2a', 'II A'),
('2b', 'II B'),
('2c', 'II C'),
('3a', 'III A'),
('3b', 'III B'),
('3c', 'III C'),
('4a', 'IV A'),
('4b', 'IV B'),
('4c', 'IV C'),
('5a', 'V A'),
('5b', 'V B'),
('5c', 'V C'),
('6a', 'VI A'),
('6b', 'VI B'),
('6c', 'VI C');

-- --------------------------------------------------------

--
-- Table structure for table `tb_kelas_siswa`
--

CREATE TABLE `tb_kelas_siswa` (
  `periode` varchar(10) NOT NULL,
  `nisn` varchar(20) NOT NULL,
  `kd_kelas` varchar(20) NOT NULL,
  `tahun_ajaran` varchar(10) NOT NULL,
  `semester` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_kelas_siswa`
--

INSERT INTO `tb_kelas_siswa` (`periode`, `nisn`, `kd_kelas`, `tahun_ajaran`, `semester`) VALUES
('20171', '6', '1a', '2017/2018', '2');

-- --------------------------------------------------------

--
-- Table structure for table `tb_kelas_siswa_pelajaran`
--

CREATE TABLE `tb_kelas_siswa_pelajaran` (
  `periode` varchar(10) NOT NULL,
  `nisn` varchar(20) NOT NULL,
  `kd_pelaajaran` varchar(5) NOT NULL,
  `kkm` int(11) NOT NULL,
  `nilai` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tb_pelajaran`
--

CREATE TABLE `tb_pelajaran` (
  `kd_pelajaran` varchar(5) NOT NULL,
  `nama_pelajaran` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_pelajaran`
--

INSERT INTO `tb_pelajaran` (`kd_pelajaran`, `nama_pelajaran`) VALUES
('BAR', 'Bahasa Arab'),
('BID', 'Bahasa Indonesia'),
('BIN', 'Bahasa Inggris'),
('IPA', 'Ilmu Pengetahuan Alam'),
('IPS', 'Ilmu Pengetahuan Sosial'),
('MTK', 'Matematika'),
('PAG', 'Pendidikan Agama'),
('PJK', 'Pendidikan Jasmani dan Kesehatan'),
('PKN', 'Pendidikan Kewarganegaraan'),
('SBK', 'Seni Budaya dan Keterampilan'),
('TIK', 'Teknologi Informasi dan Komputer');

-- --------------------------------------------------------

--
-- Table structure for table `tb_sekolah`
--

CREATE TABLE `tb_sekolah` (
  `nama` varchar(255) NOT NULL,
  `alamat` text NOT NULL,
  `telp` varchar(15) NOT NULL,
  `fax` varchar(15) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_sekolah`
--

INSERT INTO `tb_sekolah` (`nama`, `alamat`, `telp`, `fax`, `email`) VALUES
('SDN PONDOK CABE ILIR 07', 'Jl. SDN RT 01/ RW 02, cilandak, jakarta selatan, dki jakarta (12450)', '021-7654321', '021-7654321', 'admin@sdn.ac.id');

-- --------------------------------------------------------

--
-- Table structure for table `tb_siswa`
--

CREATE TABLE `tb_siswa` (
  `nisn` varchar(20) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `tgl_lahir` date NOT NULL,
  `tpt_lahir` varchar(50) NOT NULL DEFAULT '-',
  `agama` varchar(20) NOT NULL DEFAULT '-',
  `alamat` text,
  `nama_ayah` varchar(255) NOT NULL DEFAULT '-',
  `nama_ibu` varchar(255) NOT NULL DEFAULT '-',
  `pekerjaan_ayah` varchar(255) NOT NULL DEFAULT '-',
  `pekerjaan_ibu` varchar(255) NOT NULL DEFAULT '-',
  `alamat_ortu` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_siswa`
--

INSERT INTO `tb_siswa` (`nisn`, `nama`, `tgl_lahir`, `tpt_lahir`, `agama`, `alamat`, `nama_ayah`, `nama_ibu`, `pekerjaan_ayah`, `pekerjaan_ibu`, `alamat_ortu`) VALUES
('123', '4444', '2018-08-01', '-', '-', NULL, '-', '-', '-', '-', NULL),
('6', 'Namanya Siapa', '2014-01-01', 'jakarta', 'islam', 'jakarta', 'fulan', 'fulan', 'usahawan', 'wiraswasta', 'jakarta'),
('8', 'abi', '2018-05-03', '-', '-', NULL, '-', '-', '-', '-', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_artikel`
--
ALTER TABLE `tb_artikel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_kelas`
--
ALTER TABLE `tb_kelas`
  ADD PRIMARY KEY (`kd_kelas`);

--
-- Indexes for table `tb_kelas_siswa`
--
ALTER TABLE `tb_kelas_siswa`
  ADD PRIMARY KEY (`periode`,`nisn`);

--
-- Indexes for table `tb_kelas_siswa_pelajaran`
--
ALTER TABLE `tb_kelas_siswa_pelajaran`
  ADD PRIMARY KEY (`periode`,`nisn`,`kd_pelaajaran`);

--
-- Indexes for table `tb_pelajaran`
--
ALTER TABLE `tb_pelajaran`
  ADD PRIMARY KEY (`kd_pelajaran`);

--
-- Indexes for table `tb_siswa`
--
ALTER TABLE `tb_siswa`
  ADD PRIMARY KEY (`nisn`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_artikel`
--
ALTER TABLE `tb_artikel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
