import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const CustomLayout = (props) => {
  return(
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Astrophysics">
              <Menu.Item key="1">Astrophysics of Galaxies</Menu.Item>
              <Menu.Item key="2">Cosmology and Nongalactic Astrophysics</Menu.Item>
              <Menu.Item key="3">Earth and Planetary Astrophysics</Menu.Item>
              <Menu.Item key="4">High Energy Astrophysical Phenomena</Menu.Item>
              <Menu.Item key="5">Instrumentation and Methods for Astrophysics</Menu.Item>
              <Menu.Item key="6">Solar and Stellar Astrophysics</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Condensed Matter">
              <Menu.Item key="7">Disordered Systems and Neural Networks</Menu.Item>
              <Menu.Item key="8">Materials Science</Menu.Item>
              <Menu.Item key="9">Mesoscale and Nanoscale Physics</Menu.Item>
              <Menu.Item key="10">Other Condensed Matter</Menu.Item>
              <Menu.Item key="11">Quantum Gases</Menu.Item>
              <Menu.Item key="12">Soft Condensed Matter</Menu.Item>
              <Menu.Item key="13">Statistical Mechanics</Menu.Item>
              <Menu.Item key="14">Strongly Correlated Electrons</Menu.Item>
              <Menu.Item key="15">Superconductivity</Menu.Item>
              
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="Physics">
              <Menu.Item key="16">Accelerator Physics</Menu.Item>
              <Menu.Item key="17">Applied Physics</Menu.Item>
              <Menu.Item key="18">Atmospheric and Oceanic Physics</Menu.Item>
              <Menu.Item key="19">Atomic Physics</Menu.Item>
              <Menu.Item key="20">Atomic and Molecular Clusters</Menu.Item>
              <Menu.Item key="21">Biological Physics</Menu.Item>
              <Menu.Item key="22">Chemical Physics</Menu.Item>
              <Menu.Item key="23">Classical Physics</Menu.Item>
              <Menu.Item key="24">Computational Physics</Menu.Item>
              <Menu.Item key="25">Data Analysis, Statistics and Probability</Menu.Item>
              <Menu.Item key="26">Fluid Dynamics</Menu.Item>
              <Menu.Item key="27">General Physics</Menu.Item>
              <Menu.Item key="28">Geophysics</Menu.Item>
              <Menu.Item key="29">History and Philosophy of Physics</Menu.Item>
              <Menu.Item key="30">Instrumentation and Detectors</Menu.Item>
              <Menu.Item key="31">Medical Physics</Menu.Item>
              <Menu.Item key="32">Optics</Menu.Item>
              <Menu.Item key="33">Physics Education</Menu.Item>
              <Menu.Item key="34">Physics and Society</Menu.Item>
              <Menu.Item key="35">Plasma Physics</Menu.Item>
              <Menu.Item key="36">Popular Physics</Menu.Item>
              <Menu.Item key="37">Space Physics</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<NotificationOutlined />} title="Mathematics">
              <Menu.Item key="38">Algebraic Geometry</Menu.Item>
              <Menu.Item key="39">Algebraic Topology</Menu.Item>
              <Menu.Item key="40">Analysis of PDEs</Menu.Item>
              <Menu.Item key="41">Category Theory</Menu.Item>
              <Menu.Item key="42">Classical Analysis and ODEs</Menu.Item>
              <Menu.Item key="43">Combinatorics</Menu.Item>
              <Menu.Item key="44">Commutative Algebra</Menu.Item>
              <Menu.Item key="45">Complex Variables</Menu.Item>
              <Menu.Item key="46">Differential Geometry</Menu.Item>
              <Menu.Item key="47">Dynamical Systems</Menu.Item>
              <Menu.Item key="48">Functional Analysis</Menu.Item>
              <Menu.Item key="49">General Mathematics</Menu.Item>
              <Menu.Item key="50">General Topology</Menu.Item>
              <Menu.Item key="51">Geometric Topology</Menu.Item>
              <Menu.Item key="52">Group Theory</Menu.Item>
              <Menu.Item key="53">History and Overview</Menu.Item>
              <Menu.Item key="54">Information Theory</Menu.Item>
              <Menu.Item key="55">K-Theory and Homology</Menu.Item>
              <Menu.Item key="56">Logic</Menu.Item>
              <Menu.Item key="57">Mathematical Physics</Menu.Item>
              <Menu.Item key="58">Metric Geometry</Menu.Item>
              <Menu.Item key="59">Number Theory</Menu.Item>
              <Menu.Item key="60">Numerical Analysis</Menu.Item>
              <Menu.Item key="61">Operator Algebras</Menu.Item>
              <Menu.Item key="62">Optimization and Control</Menu.Item>
              <Menu.Item key="63">Probability</Menu.Item>
              <Menu.Item key="64">Quantum Algebra</Menu.Item>
              <Menu.Item key="65">Representation Theory</Menu.Item>
              <Menu.Item key="66">Rings and Algebras</Menu.Item>
              <Menu.Item key="67">Spectral Theory</Menu.Item>
              <Menu.Item key="68">Statistics Theory</Menu.Item>
              <Menu.Item key="69">Symplectic Geometry</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" icon={<UserOutlined />} title="Nonlinear Sciences">
              <Menu.Item key="70">Adaptation and Self-Organizing Systems</Menu.Item>
              <Menu.Item key="71">Cellular Automata and Lattice Gases</Menu.Item>
              <Menu.Item key="72">Chaotic Dynamics</Menu.Item>
              <Menu.Item key="73">Exactly Solvable and Integrable Systems</Menu.Item>
              <Menu.Item key="74">Pattern Formation and Solitons</Menu.Item>
              
            </SubMenu>
            <SubMenu key="sub6" icon={<UserOutlined />} title="Computer Science">
              <Menu.Item key="75">Artificial Intelligence</Menu.Item>
              <Menu.Item key="76">Computational Complexity</Menu.Item>
              <Menu.Item key="77">Computational Geometry</Menu.Item>
              <Menu.Item key="78">Computational Engineering, Finanace, and Science</Menu.Item>
              <Menu.Item key="79">Computation and Language (Computational Linguistics and Natural Language and Speech Processing)</Menu.Item>
              <Menu.Item key="80">Computer Vision and Pattern Recognition</Menu.Item>
              <Menu.Item key="81">Computers and Society</Menu.Item>
              <Menu.Item key="82">Cryptography and Security</Menu.Item>
              <Menu.Item key="83">Databases</Menu.Item>
              <Menu.Item key="84">Data Structures and Algorithms</Menu.Item>
              <Menu.Item key="85">Digital Libraries</Menu.Item>
              <Menu.Item key="86">Discrete Mathematics</Menu.Item>
              <Menu.Item key="87">Distributed, Parallel, and Cluster Computing</Menu.Item>
              <Menu.Item key="88">Emerging Technologoies</Menu.Item>
              <Menu.Item key="89">Formal Languages and Automata Theory</Menu.Item>
              <Menu.Item key="90">Computer Science and Game Theory</Menu.Item>
              <Menu.Item key="91">General Literature</Menu.Item>
              <Menu.Item key="92">Graphics</Menu.Item>
              <Menu.Item key="93">Hardware Architecture</Menu.Item>
              <Menu.Item key="94">Human-Computer Interaction</Menu.Item>
              <Menu.Item key="95">Information Retrieval</Menu.Item>
              <Menu.Item key="96">Information Theory</Menu.Item>
              <Menu.Item key="97">Machine Learning</Menu.Item>
              <Menu.Item key="98">Logic in Computer Science</Menu.Item>
              <Menu.Item key="99">Mathematical Software</Menu.Item>
              <Menu.Item key="100">Multiagent Systems</Menu.Item>
              <Menu.Item key="101">Multimedia</Menu.Item>
              <Menu.Item key="102">Networking and Internet Architecture</Menu.Item>
              <Menu.Item key="103">Neural and Evolutionary Computation</Menu.Item>
              <Menu.Item key="104">Numerical Analysis</Menu.Item>
              <Menu.Item key="105">Operating Systems</Menu.Item>
              <Menu.Item key="106">Other</Menu.Item>
              <Menu.Item key="107">Performance</Menu.Item>
              <Menu.Item key="108">Programming Languages</Menu.Item>
              <Menu.Item key="109">Robotics</Menu.Item>
              <Menu.Item key="110">Social and Information Networks</Menu.Item>
              <Menu.Item key="111">Software Engineering</Menu.Item>
              <Menu.Item key="112">Sound</Menu.Item>
              <Menu.Item key="113">Symbolic Computation</Menu.Item>
              <Menu.Item key="114">Systems and Control</Menu.Item>
            </SubMenu>
            <SubMenu key="sub7" icon={<UserOutlined />} title="Quantitative Biology">
              <Menu.Item key="115">Biomolecules</Menu.Item>
              <Menu.Item key="116">Cell Behavior</Menu.Item>
              <Menu.Item key="117">Genomics</Menu.Item>
              <Menu.Item key="118">Molecular Networks</Menu.Item>
              <Menu.Item key="119">Neurons and Cognition</Menu.Item>
              <Menu.Item key="120">Other Quantitative Biology</Menu.Item>
              <Menu.Item key="121">Populations and Evolution</Menu.Item>
              <Menu.Item key="122">Quantitative Methods</Menu.Item>
              <Menu.Item key="123">Subcellular Processes</Menu.Item>
              <Menu.Item key="124">Tissues and Organs</Menu.Item>
            </SubMenu>
            <SubMenu key="sub8" icon={<UserOutlined />} title="Quantitative Finance">
              <Menu.Item key="125">Computational Finance</Menu.Item>
              <Menu.Item key="126">Economics</Menu.Item>
              <Menu.Item key="127">General Finance</Menu.Item>
              <Menu.Item key="128">Mathematical Finance</Menu.Item>
              <Menu.Item key="129">Portfolio Management</Menu.Item>
              <Menu.Item key="130">Pricing of Securities</Menu.Item>
              <Menu.Item key="131">Risk Management</Menu.Item>
              <Menu.Item key="132">Statistical Finance</Menu.Item>
              <Menu.Item key="133">Trading and Market Microstructure</Menu.Item>
            </SubMenu>
            <SubMenu key="sub9" icon={<UserOutlined />} title="Statistics">
              <Menu.Item key="134">Applications</Menu.Item>
              <Menu.Item key="135">Computation</Menu.Item>
              <Menu.Item key="136">Machine Learning</Menu.Item>
              <Menu.Item key="137">Methodology</Menu.Item>
              <Menu.Item key="138">Other Statistics</Menu.Item>
              <Menu.Item key="139">Statistics Theory</Menu.Item>
            </SubMenu>
            <SubMenu key="sub10" icon={<UserOutlined />} title="Electrical Engineering and Systems Science">
              <Menu.Item key="140">Audio and Speech Processing</Menu.Item>
              <Menu.Item key="141">Image and Video Processing</Menu.Item>
              <Menu.Item key="142">Signal Processing</Menu.Item>
              <Menu.Item key="143">Systems and Control</Menu.Item>
            </SubMenu>
            <SubMenu key="sub11" icon={<UserOutlined />} title="Economics">
              <Menu.Item key="144">Econometrics</Menu.Item>
              <Menu.Item key="145">General Economics</Menu.Item>
              <Menu.Item key="146">Theoretical Economics</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ padding: '0 50px' }}>
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }} className="site-layout-content">
                {props.children}
              </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default CustomLayout;
