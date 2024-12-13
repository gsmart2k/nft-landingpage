import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Home() {
	return (
		<div className="flex flex-col w-full  ">
			{/* HERO SCREEN */}
			<div className="flex flex-col h-screen bg-[url('/heroimage.png')] bg-no-repeat bg-cover">
				<div className="flex flex-row items-center justify-between w-full p-10">
					<div className="flex flex-row items-center space-x-10">
						<Image src="/logo.png" width={50} height={50} />
						<nav className="flex flex-row space-x-10 text-sm">
							<Link href="">Home</Link>
							<Link href="">MarketPlace</Link>
							<Link href="">About</Link>
							<Link href="">Wallet</Link>
						</nav>
					</div>
					<div className="flex flex-row justify-between space-x-10">
						<div className="flex items-center bg-white/20 backdrop-blur-lg rounded-lg shadow-lg px-4 py-2">
							<MagnifyingGlassIcon
								width={20}
								height={20}
								className="text-white"
							/>
							<input
								className="bg-transparent text-white placeholder-white/70 focus:outline-none ml-2 text-sm"
								placeholder="Search By Creator"
							/>
						</div>
						<button className="rounded-full bg-none bg-transparent  text-sm px-7 py-3 shadow-custom shadow-cyan-500/50">
							Join Waitlist
						</button>
					</div>
				</div>
				{/* HERO SECTION BELOW */}
				<div className="flex flex-col mt-10 px-10">
					<h2
						style={{ WebkitTextStroke: "2px #26135080", color: "transparent" }}
						className="font-custom text-[60px] bg-gradient-to-r from-white to-[#5FECFC] text-transparent bg-clip-text w-9/12">
						Discover and Trade Extraordinary Digital Arts
					</h2>

					<h5 className="text-xl text-gray-400 font-thin">
						Join the vibrant community of creators and collectors
					</h5>
					<button className="bg-gradient-to-r from-[#2575FF] via-[#5FECFC] to-[#57E493] rounded-full text-black w-fit mt-10 shadow-custom shadow-cyan-500/50 text-lg px-10 py-3">
						Explore Now
					</button>
					<div className="flex flex-row rounded-3xl w-fit mt-10 p-5 space-x-14 bg-[#30303080]">
						<div className="flex flex-col space-y-1 justify-center items-center">
							<h3 className="font-custom text-3xl">28k+</h3>
							<h6 className="text-[#5FECFC]">Satisfied Users</h6>
						</div>
						<div className="flex flex-col space-y-2 justify-center items-center">
							<h3 className="font-custom text-3xl">18k+</h3>
							<h6 className="text-[#5FECFC]">Artists</h6>
						</div>
						<div className="flex flex-col space-y-2 justify-center items-center">
							<h3 className="font-custom text-3xl">20k+</h3>
							<h6 className="text-[#5FECFC]">Distributors</h6>
						</div>
					</div>
				</div>

				{/* COMPANY LOGOS  */}
				<div className="flex flex-row w-full p-10 justify-between mt-5">
					<Image width={150} height={150} src="/logos/coinbase.svg" />
					<Image width={150} height={150} src="/logos/spotify.svg" />
					<Image width={150} height={150} src="/logos/slack.svg" />
					<Image width={150} height={150} src="/logos/dropbox.svg" />
					<Image width={150} height={150} src="/logos/webflow.svg" />
				</div>
			</div>

			{/* ABOUT NFTS */}

			<div className="flex flex-row w-full mt-10 justify-center items-center px-20 py-10 space-x-10">
				<div className="flex w-6/12">
					<Image src="/aboutnft.png" width={500} height={500} />
				</div>
				<div className="w-6/12 space-y-5">
					<h2 className="font-custom bg-gradient-to-r from-white via-[#5FECFC] to-[#5FECFC] bg-clip-text text-transparent text-4xl">
						About NFTS
					</h2>
					<h5 className="text-xl font-extralight leading-loose">
						Non-Fungible Tokens (NFTs) are unique digital assets verified with
						blockchain technology. They represent ownership of specific items
						like artwork, music, and more, offering artists and creators a new
						way to monetize their work.
					</h5>
				</div>
			</div>

			{/* FEATURED NFTS */}
			<div className="flex flex-col w-full justify-center items-center py-10 px-20">
				<h2 className="font-custom bg-gradient-to-r p-5 from-white via-[#5FECFC] to-[#5FECFC] bg-clip-text text-transparent text-4xl">
					Featured NFTS
				</h2>
				<div className="grid grid-rows-2 grid-flow-col gap-x-10 gap-y-5 mt-10">
					<div className="flex flex-col bg-[#30303099] rounded-md p-3 w-fit">
						<Image
							src="/featured/nft1.png"
							width={500}
							height={500}
							alt="NFT"
						/>
						<div className="flex flex-row items-center justify-between p-5">
							<div className="flex flex-col">
								<h4 className="font-custom text-lg">Eternal</h4>
								<h4 className="text-[#815EE3]">1.2Eth</h4>
							</div>
							<h3>1 of 12</h3>
						</div>
						<hr className="flex m-auto w-11/12" />
						<button className="text-[#5FECFC] p-5">Place a bid</button>
					</div>
					<div className="flex flex-col bg-[#30303099] rounded-md p-3 w-fit">
						<Image
							src="/featured/nft2.png"
							width={500}
							height={500}
							alt="NFT"
						/>
						<div className="flex flex-row items-center justify-between p-5">
							<div className="flex flex-col">
								<h4 className="font-custom text-lg">Eternal</h4>
								<h4 className="text-[#815EE3]">1.2Eth</h4>
							</div>
							<h3>1 of 12</h3>
						</div>
						<hr className="flex m-auto w-11/12" />
						<button className="text-[#5FECFC] p-5">Place a bid</button>
					</div>
					<div className="flex flex-col bg-[#30303099] rounded-md p-3 w-fit">
						<Image
							src="/featured/nft3.png"
							width={500}
							height={500}
							alt="NFT"
						/>
						<div className="flex flex-row items-center justify-between p-5">
							<div className="flex flex-col">
								<h4 className="font-custom text-lg">Eternal</h4>
								<h4 className="text-[#815EE3]">1.2Eth</h4>
							</div>
							<h3>1 of 12</h3>
						</div>
						<hr className="flex m-auto w-11/12" />
						<button className="text-[#5FECFC] p-5">Place a bid</button>
					</div>
					<div className="flex flex-col bg-[#30303099] rounded-md p-3 w-fit">
						<Image
							src="/featured/nft4.png"
							width={500}
							height={500}
							alt="NFT"
						/>
						<div className="flex flex-row items-center justify-between p-5">
							<div className="flex flex-col">
								<h4 className="font-custom text-lg">Eternal</h4>
								<h4 className="text-[#815EE3]">1.2Eth</h4>
							</div>
							<h3>1 of 12</h3>
						</div>
						<hr className="flex m-auto w-11/12" />
						<button className="text-[#5FECFC] p-5">Place a bid</button>
					</div>
					<div className="flex flex-col bg-[#30303099] rounded-md p-3 w-fit">
						<Image
							src="/featured/nft5.png"
							width={500}
							height={500}
							alt="NFT"
						/>
						<div className="flex flex-row items-center justify-between p-5">
							<div className="flex flex-col">
								<h4 className="font-custom text-lg">Eternal</h4>
								<h4 className="text-[#815EE3]">1.2Eth</h4>
							</div>
							<h3>1 of 12</h3>
						</div>
						<hr className="flex m-auto w-11/12" />
						<button className="text-[#5FECFC] p-5">Place a bid</button>
					</div>
					<div className="flex flex-col bg-[#30303099] rounded-md p-3 w-fit">
						<Image
							src="/featured/nft1.png"
							width={500}
							height={500}
							alt="NFT"
						/>
						<div className="flex flex-row items-center justify-between p-5">
							<div className="flex flex-col">
								<h4 className="font-custom text-lg">Eternal</h4>
								<h4 className="text-[#815EE3]">1.2Eth</h4>
							</div>
							<h3>1 of 12</h3>
						</div>
						<hr className="flex m-auto w-11/12" />
						<button className="text-[#5FECFC] p-5">Place a bid</button>
					</div>
				</div>
			</div>

			{/* HOW IT WORKS */}
			<div className="flex flex-col m-0 py-32 px-10 bg-gradient-to-br from-[#130B3B] via-[#130B3B] to-pink-950 w-full space-y-10">
				<h2 className="font-custom bg-gradient-to-r from-white to-[#5FECFC] bg-clip-text text-transparent text-4xl text-center">
					How It Works
				</h2>
				<div className="flex flex-row items-center justify-center space-x-10">
					<div className="flex flex-col w-4/12 bg-[#30303099] p-10 items-center justify-center space-y-5 rounded-lg">
						<Image
							src="/icons/wallet.png"
							width={40}
							height={40}
							alt="wallet"
						/>
						<h3 className="font-custom text-lg">Connect Your Wallet</h3>
						<p className="text-center text-sm text-gray-400 text-ellipsis">
							Securely link your digital wallet to start buying and selling NFTs
							on our platform.
						</p>
					</div>
					<div className="flex flex-col w-4/12 bg-[#30303099] p-10 items-center justify-center space-y-5 rounded-lg">
						<Image
							src="/icons/discovery.png"
							width={40}
							height={40}
							alt="wallet"
						/>
						<h3 className="font-custom text-lg">Discover Art</h3>
						<p className="text-center text-sm text-gray-400 text-ellipsis">
							Explore a diverse collection of digital artworks from emerging and
							established artists.
						</p>
					</div>
					<div className="flex flex-col w-4/12 bg-[#30303099] p-10 items-center justify-center space-y-5 rounded-lg">
						<Image src="/icons/card.png" width={40} height={40} alt="wallet" />
						<h3 className="font-custom text-lg">Trade NFTs</h3>
						<p className="text-center text-sm text-gray-400 text-ellipsis">
							Buy or sell NFTs through simple transactions, with all details
							transparently handled on the blockchain.
						</p>
					</div>
				</div>
			</div>

			{/* STAY IN THE LOOP */}
			<div className="flex justify-center items-center p-10">
				<div className="flex p-[1px] bg-black text-white rounded-lg border-1 border-transparent bg-clip-border bg-gradient-to-r from-[#2575FF] via-[#5FECFC] to-[#57E493] w-full">
					<div className="flex flex-col items-center justify-center bg-gray-800 w-full rounded-md py-20 px-10 space-y-10">
						<div className="flex flex-col space-y-3 items-center justify-center">
							<h3 className="font-custom text-2xl">Stay In The Loop</h3>
							<p className="text-sm text-gray-500">
								Get the latest NFT updates and exclusive offers straight to your
								inbox!
							</p>
						</div>
						<div className="flex space-x-5 items-center justify-center w-8/12">
							<input
								className="bg-transparent p-3  bg-gray-500 rounded-xl w-5/12"
								placeholder="Enter your email address"
							/>
							<button className="rounded-full bg-none bg-black  text-md px-7 py-3 shadow-custom shadow-cyan-500/50">
								View More
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* FOOTER */}

			<hr className="opacity-30" />

			<div className="flex p-10 justify-center items-center">
				<h4 className="text-sm text-center ">
					&copy; Designed By Crownz | Developed By OMOGBOLAHAN
				</h4>
			</div>
		</div>
	);
}
