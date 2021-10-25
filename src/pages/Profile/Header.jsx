import React, { memo, useState, useEffect } from "react";
import ButtonFollow from "../../components/ButtonFollow";
import ModalImage from "../../components/ModalImage";
import Placeholder from "../../components/Placeholder";
import avatarUser from "../../assets/images/avatarDefault.png";
import splitDate from "../../helpers/splitDate";
import fetchWithoutToken from "../../helpers/fetchWithoutToken";
//--------------------------------------------------
export default memo(function Header({ userId }) {
  const [loaded, setLoaded] = useState(false);
  const [infoUser, setInfoUser] = useState({});
  //--------------------------------------------------
  useEffect(() => {
    const getData = async () => {
      setInfoUser(
        await fetchWithoutToken("GET", "/users/find_one?user_id=" + userId)
      );
    };
    getData();
  }, [userId]);
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
          <h3 className="text-center mb-2">{infoUser?.user?.userName}</h3>
          <div className="row">
            <p className="col-sm-4 col-12 text-center">
              <b>{infoUser?.user?.posts?.length}</b> posts
            </p>
            <p className="col-sm-4 col-12 text-center">
              <b>{infoUser?.user?.followers?.length}</b> followers
            </p>
            <p className="col-sm-4 col-12 text-center">
              <b>{infoUser?.user?.following?.length}</b> following
            </p>
          </div>
          <div className="text-center mb-2">
            Join date: {splitDate(infoUser?.user?.createdAt)}
          </div>
          <div className="text-center">
            <ButtonFollow />
          </div>
        </div>
      </div>
    </div>
  );
});
