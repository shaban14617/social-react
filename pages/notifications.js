import Link from "next/link";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import Layout from "../components/Layout";
import NavigationBar from "../components/NavigationBar";

function notifications() {
  return (
    <div>
      <Layout>
        <h1 className="text-6xl mb-4 text-gray-300">Notifications</h1>
        <Card noPadding={true}>
          <div className="">
            <div className="flex gap-3 items-center border-b border-b-gray-100 p-4">
              <Link href={"/profile"} className="hover:opacity-90">
                <Avatar />
              </Link>
              <div>
                <Link
                  className="font-semibold mr-1 hover:underline"
                  href={"/profile"}
                >
                  Mohammed zaghlol
                </Link>
                liked{" "}
                <Link
                  href={"/profile/posts"}
                  className="text-socialBlue hover:underline"
                >
                  your post
                </Link>
              </div>
            </div>
            <div className="flex gap-3 items-center border-b border-b-gray-100 p-4">
              <Link href={"/profile"} className="hover:opacity-90">
                <Avatar />
              </Link>
              <div>
                <Link
                  className="font-semibold mr-1 hover:underline"
                  href={"/profile"}
                >
                  Mohammed zaghlol
                </Link>
                liked{" "}
                <Link
                  href={"/profile/posts"}
                  className="text-socialBlue hover:underline"
                >
                  your post
                </Link>
              </div>
            </div>
            <div className="flex gap-3 items-center border-b border-b-gray-100 p-4">
              <Link href={"/profile"} className="hover:opacity-90">
                <Avatar />
              </Link>
              <div>
                <Link
                  className="font-semibold mr-1 hover:underline"
                  href={"/profile"}
                >
                  Mohammed zaghlol
                </Link>
                liked{" "}
                <Link
                  href={"/profile/posts"}
                  className="text-socialBlue hover:underline"
                >
                  your post
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </Layout>
    </div>
  );
}

export default notifications;
