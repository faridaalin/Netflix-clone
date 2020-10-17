import React, { useEffect } from "react";
import Herobanner from "../elements/Herobanner/Herobanner";
import Thumbnail from "../elements/Thumbnail/Thumbnail";
import CardGrid from '../styles/Grid/CardGrid.style'
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { fetchDiscoverData } from "../../redux/reduser/discoverReducer";


function Home({ discover, fetchDiscoverData }) {
    useEffect(() => {
        fetchDiscoverData();
    }, [fetchDiscoverData]);

    const loading = useSelector((state) => state.discover.loading);
    const errorMsg = useSelector((state) => state.discover.error);
    const discoverList = useSelector((state) => state.discover.result);

    return loading ? (
        <h2>Loading...</h2>
    ) : errorMsg ? (
        <h2>{errorMsg}</h2>
    ) : (
                <main>
                    <Herobanner />
                    <h2>Discover</h2>
                    <CardGrid>
                        <div className="inner">
                            {discoverList.map((discover) => (
                                <Thumbnail
                                    key={discover.id}
                                    discover={discover.poster_path}
                                    title={discover.name}
                                />

                            ))}
                        </div>

                    </CardGrid>

                </main>
            );
}

const mapStateToProps = (state) => {
    return {
        discoverDate: state.discover,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDiscoverData: () => dispatch(fetchDiscoverData()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
