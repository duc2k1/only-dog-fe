import React, { memo, useState } from "react";
import ButtonFollow from "../../components/ButtonFollow";
import ModalImage from "../../components/ModalImage";
import Placeholder from "../../components/Placeholder";
import avatarUser from "../../assets/images/avatarDefault.png";
import splitDate from "../../helpers/splitDate";
import dataUser from "../../seeds/dataUser.json";
//--------------------------------------------------
const infoUser = dataUser.user;
const postsOfUser = infoUser.posts;
const followersOfUser = infoUser.followers;
const followingOfUser = infoUser.following;
const createdAtOfUser = splitDate(infoUser.createdAt);
//--------------------------------------------------
export default memo(function Header() {
  const [loaded, setLoaded] = useState(false);
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
          <h3 className="text-center mb-2">{dataUser.user.userName}</h3>
          <div className="row">
            <p className="col-sm-4 col-12 text-center">
              <b>{postsOfUser.length}</b> posts
            </p>
            <p className="col-sm-4 col-12 text-center">
              <b>{followersOfUser.length}</b> followers
            </p>
            <p className="col-sm-4 col-12 text-center">
              <b>{followingOfUser.length}</b> following
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
