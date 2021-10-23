import React, { memo, useState } from "react";
import ButtonFollow from "../ButtonFollow";
import ModalImage from "../ModalImage";
import Placeholder from "../Placeholder";
import avatar from "../../assets/images/avatarDefault.png";
import fakeDataUser from "../../seeds/user.json";
//--------------------------------------------------

//--------------------------------------------------
export default memo(function Header() {
  const [loaded, setLoaded] = useState(false);
  const [avatarUser, setAvatarUser] = useState(avatar);
  const [postsOfUser, setPostsOfUser] = useState(fakeDataUser.user.posts);
  const [followersOfUser, setFollowersOfUser] = useState(
    fakeDataUser.user.followers
  );
  const [followingOfUser, setFollowingOfUser] = useState(
    fakeDataUser.user.following
  );
  const [createdAtOfUser, setCreatedAtOfUser] = useState(
    fakeDataUser.user.createdAt.split("T")[0]
  );
  //--------------------------------------------------
  return (
    <div>
      <div className="row p-5">
        <div className="col-md-4 text-center">
          <ModalImage
            component={
              <>
                <img
                  src={avatarUser}
                  alt=""
                  width="200"
                  height="200"
                  role="button"
                  style={{ objectFit: "cover", userSelect: "none" }}
                  onLoad={() => setLoaded(true)}
                  className={loaded ? "rounded-circle" : "d-none"}
                />
                {!loaded && (
                  <Placeholder rounded={true} width={200} height={200} />
                )}
              </>
            }
          />
        </div>
        <div className="col-md-8" style={{ marginTop: 30 }}>
          <h3 className="text-center mb-2">{fakeDataUser.user.name}</h3>
          <div className="d-flex justify-content-around mb-2">
            <p className="me-3">
              <b>{postsOfUser}</b> posts
            </p>
            <p className="me-3">
              <b>{followersOfUser}</b> followers
            </p>
            <p className="me-3">
              <b>{followingOfUser}</b> following
            </p>
          </div>
          <div className="text-center mb-2">Join date: {createdAtOfUser}</div>
          <div className="text-center">
            <ButtonFollow />
          </div>
        </div>
      </div>
    </div>
  );
});
