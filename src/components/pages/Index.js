import React from 'react'
import BasePage from './BasePage'
import {Link} from "react-router-dom"
import Layout from '../public/Layout'
import Navigator from '../public/Navigator'
import PropTypes from 'prop-types'
import {RoutePaths} from '../Routes'
import logger from '../../libs/logger'

export default class Index extends BasePage {
	static contextTypes = {
		setting: PropTypes.any
	};

	render() {
		logger.info(this.context)
		return (
			<Layout>
				<Navigator/>
				<ul>
					{RoutePaths.map((routeOption, index)=> {
						return (
							<li key={`route-${index}`}>
								<Link to={routeOption.path}>{routeOption.title}</Link>
							</li>
						);
					})}
				</ul>
			</Layout>
		);
	}
}