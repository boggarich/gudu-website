import React from 'react';

export default class GuduFx extends React.Component {

    render() {

        return(
            
            <>

                <div className='spacing'>
                            <h1 className='header-lg text-white fw-700 has-underline underline-gradient fit-content'>Live Competition</h1>

                            <table className='bordered'>
                                <thead>
                                    <th></th>
                                    <th>Position</th>
                                    <th>Username</th>
                                    <th>Score</th>
                                    <th>Country</th>
                                    <th>Game Time</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img src={ process.env.PUBLIC_URL + "/assets/img/man-in-glasses.png" } /> </td>
                                        <td>1st</td>
                                        <td>Mr_Gudu</td>
                                        <td>1093</td>
                                        <td>USA</td>
                                        <td>00:24:55</td>
                                    </tr>
                                    <tr>
                                        <td><img src={ process.env.PUBLIC_URL + "/assets/img/man-in-glasses.png" } /> </td>
                                        <td>1st</td>
                                        <td>Mr_Gudu</td>
                                        <td>1093</td>
                                        <td>USA</td>
                                        <td>00:24:55</td>
                                    </tr>
                                    <tr>
                                        <td><img src={ process.env.PUBLIC_URL + "/assets/img/man-in-glasses.png" } /> </td>
                                        <td>1st</td>
                                        <td>Mr_Gudu</td>
                                        <td>1093</td>
                                        <td>USA</td>
                                        <td>00:24:55</td>
                                    </tr>
                                    <tr>
                                        <td><img src={ process.env.PUBLIC_URL + "/assets/img/man-in-glasses.png" } /> </td>
                                        <td>1st</td>
                                        <td>Mr_Gudu</td>
                                        <td>1093</td>
                                        <td>USA</td>
                                        <td>00:24:55</td>
                                    </tr>
                                    
                                    
                                </tbody>
                            </table>
                </div>

                <div className='spacing'>
                    <h1 className='header-lg text-white fw-700 has-underline underline-gradient fit-content'>Previous Competition</h1>

                    <table className='bordered'>
                        <thead>
                            <th></th>
                            <th>Username</th>
                            <th>Coins</th>
                            <th>Position</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src={ process.env.PUBLIC_URL + "/assets/img/man-in-glasses.png" } /> </td>
                                <td>1st</td>
                                <td>Mr_Gudu</td>
                                <td>1093</td>
                            </tr>
                            <tr>
                                <td><img src={ process.env.PUBLIC_URL + "/assets/img/man-in-glasses.png" } /> </td>
                                <td>1st</td>
                                <td>Mr_Gudu</td>
                                <td>1093</td>
                            </tr>
                            <tr>
                                <td><img src={ process.env.PUBLIC_URL + "/assets/img/man-in-glasses.png" } /> </td>
                                <td>1st</td>
                                <td>Mr_Gudu</td>
                                <td>1093</td>
                            </tr>
                            <tr>
                                <td><img src={ process.env.PUBLIC_URL + "/assets/img/man-in-glasses.png" } /> </td>
                                <td>1st</td>
                                <td>Mr_Gudu</td>
                                <td>1093</td>
                            </tr>
                            <tr>
                                <td><img src={ process.env.PUBLIC_URL + "/assets/img/man-in-glasses.png" } /> </td>
                                <td>1st</td>
                                <td>Mr_Gudu</td>
                                <td>1093</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

            </>

        );

    }

}